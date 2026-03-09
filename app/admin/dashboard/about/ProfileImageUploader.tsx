"use client";

import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import { useRouter } from "next/navigation";
import { uploadProfileImage } from "../actions";
import { getCroppedImageBlob } from "@/lib/utils/crop-image";
import { LAYOUT } from "@/lib/constants";

interface ProfileImageUploaderProps {
  /** Presigned or public URL for current profile image. Null if none. */
  currentImageUrl: string | null;
}

export function ProfileImageUploader({ currentImageUrl }: ProfileImageUploaderProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const aspect = LAYOUT.PROFILE_IMAGE_ASPECT;

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith("image/")) return;
    setError(null);
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };

  const handleClose = useCallback(() => {
    setModalOpen(false);
    if (imageSrc) URL.revokeObjectURL(imageSrc);
    setImageSrc(null);
    setCroppedAreaPixels(null);
    setError(null);
  }, [imageSrc]);

  const handleCropAndUpload = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    setUploading(true);
    setError(null);
    try {
      const blob = await getCroppedImageBlob(imageSrc, croppedAreaPixels);
      const formData = new FormData();
      formData.append("file", blob, "profile.jpg");
      const result = await uploadProfileImage(formData);
      if (result.error) {
        setError(result.error);
      } else {
        handleClose();
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-zinc-400">
          Profile image
        </label>
        <div className="flex flex-wrap items-start gap-4">
          <div
            className="flex h-[200px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800"
            style={{ aspectRatio: String(aspect) }}
          >
            {currentImageUrl ? (
              <img
                src={currentImageUrl}
                alt="Current profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-zinc-500">No image</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-700"
            >
              {currentImageUrl ? "Change image" : "Upload image"}
            </button>
            <p className="text-xs text-zinc-500">
              Crop is locked to {LAYOUT.PROFILE_IMAGE_WIDTH}×{LAYOUT.PROFILE_IMAGE_HEIGHT} so the layout stays consistent.
            </p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-zinc-950"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-crop-title"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <h2 id="profile-crop-title" className="text-lg font-medium text-white">
              Crop profile image
            </h2>
            <button
              type="button"
              onClick={handleClose}
              className="rounded p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!imageSrc ? (
            <div
              className="flex flex-1 flex-col items-center justify-center gap-4 p-8"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file?.type.startsWith("image/")) {
                  setError(null);
                  setImageSrc(URL.createObjectURL(file));
                }
              }}
            >
              <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-zinc-600 bg-zinc-900/50 px-12 py-10 transition hover:border-amber-500/50 hover:bg-zinc-900">
                <svg className="h-12 w-12 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-zinc-300">Drop an image or click to choose</span>
                <span className="text-xs text-zinc-500">JPG, PNG or WebP</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          ) : (
            <>
              <div className="relative flex-1 min-h-0 rounded-lg bg-zinc-900 cropper-admin">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  aspect={aspect}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  style={{ containerStyle: { background: "#18181b" } }}
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-zinc-800 px-4 py-3">
                <p className="text-sm text-zinc-400">
                  Drag to position · Crop is locked to profile aspect ratio
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      URL.revokeObjectURL(imageSrc);
                      setImageSrc(null);
                      setCroppedAreaPixels(null);
                    }}
                    className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  >
                    Choose another
                  </button>
                  <button
                    type="button"
                    onClick={handleCropAndUpload}
                    disabled={uploading || !croppedAreaPixels}
                    className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500 disabled:opacity-50"
                  >
                    {uploading ? "Uploading…" : "Crop & upload"}
                  </button>
                </div>
              </div>
            </>
          )}

          {error && (
            <p className="px-4 pb-2 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
        </div>
      )}
    </>
  );
}
