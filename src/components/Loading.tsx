import { Spinner } from "./ui/shadcn-io/spinner";

function Loading({ message }: { message?: string }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size={50} variant={"circle-filled"} className="text-primary" />
        <p className="text-muted-foreground">{message || "Loading..."}</p>
      </div>
    </div>
  );
}

export default Loading;
