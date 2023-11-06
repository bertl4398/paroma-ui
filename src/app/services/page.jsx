import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { faCogs, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

async function getServices() {
  const result = await fetch("http://localhost:4000/services");

  return result.json();
}

const Services = async () => {
  const services = await getServices();

  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">Services</h1>
      <Separator className="mt-2 mb-4" />
      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-xl">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${service.icon}`} alt="" />
                <AvatarFallback>{service.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{service.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
            <CardFooter>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <FontAwesomeIcon
                      icon={faCogs}
                      className="hover:cursor-pointer"
                    />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Show Details</MenubarItem>
                    <MenubarItem>Edit Service</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Edit Consent</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Services;
