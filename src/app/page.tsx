import ServerComponentHelloWorld from "@/components/server/server-component-hello-world";
import ClientComponentHelloWorld from "@/components/client/client-component-hello-world";

export default function Home() {
  return (
    <div>
      <ServerComponentHelloWorld />
      <ClientComponentHelloWorld />
    </div>
  );
}
