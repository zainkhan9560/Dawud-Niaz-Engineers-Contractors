import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Props = {
  src: string;
  poster: string;
  title: string;
  /** accessible description of what the video shows */
  label: string;
  className?: string;
};

/**
 * Site video that is always muted (the files also have no audio track).
 * It plays silently only while on screen, pauses when scrolled away to save data and battery,
 * and falls back to a tap-to-play button if the browser blocks autoplay.
 */
export default function MutedVideo({ src, poster, title, label, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.volume = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !userPaused.current) {
          el.play().then(
            () => setBlocked(false),
            () => setBlocked(true),
          );
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.muted = true;
      el.play().then(
        () => setBlocked(false),
        () => setBlocked(true),
      );
    } else {
      userPaused.current = true;
      el.pause();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-border bg-black ${className}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        title={title}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause video: ${title}` : `Play video: ${title}`}
        className={`absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-opacity hover:bg-black/80 focus-visible:opacity-100 ${
          playing && !blocked ? "opacity-70 md:opacity-0 md:group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  );
}
