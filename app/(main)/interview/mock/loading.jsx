import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Loader
        words={[
          "loading mock interview",
          "preparing questions",
          "setting up session",
          "almost ready",
          "loading mock interview",
        ]}
      />
    </div>
  );
}
