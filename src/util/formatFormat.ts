import {
  type MediaFormat,
  mediaFormatLabels,
} from "../constants/mediaFormatLabels.ts";

export function formatFormat(format: string) {
  const formatted = mediaFormatLabels[format as MediaFormat];
  return formatted
    ? formatted
    : (format || "Unknown")
        .split("_")
        .map((word: string) =>
          word.length > 3
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word,
        )
        .join(" ");
}
