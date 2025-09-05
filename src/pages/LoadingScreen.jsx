import { Spinner } from "@heroui/react";

export default function LoadingScreen() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Spinner />
    </div>
  );
}
