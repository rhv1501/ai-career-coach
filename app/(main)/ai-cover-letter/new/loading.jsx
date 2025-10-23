import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Loader
        words={[
          "analyzing job post",
          "crafting letter",
          "reviewing content",
          "almost ready",
          "analyzing job post",
        ]}
      />
    </div>
  );
}
