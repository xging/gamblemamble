//Highlight emails starting with @, twitter feed.
import React from "react";

export function highlightMentions(text: string) {
  return text.split(/(@\w+)/g).map((part, idx) =>
    part.startsWith("@") ? (
      <span key={idx} className="text-sky-500 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}
