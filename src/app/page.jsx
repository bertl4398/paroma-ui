import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  faBan,
  faCircleCheck,
  faCirclePause,
  faShield,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

async function getServices() {
  const result = await fetch("http://localhost:4000/services", {
    next: {
      revalidate: 0,
    },
  });

  return result.json();
}

const Home = async () => {
  const services = await getServices();

  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">Dashboard</h1>
      <Separator className="mb-4" />
      <div className="grid grid-cols-3 gap-8">
        <Card className="bg-green-400">
          <CardHeader>
            <CardTitle>Consent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-10 text-4xl items-center">
              <p>4</p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-slate-800"
              />
            </div>
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card className="bg-yellow-400">
          <CardHeader>
            <CardTitle>Consent Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-10 text-4xl items-center">
              <p>1</p>
              <FontAwesomeIcon
                icon={faCirclePause}
                className="text-slate-800"
              />
            </div>
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card className="bg-red-400">
          <CardHeader>
            <CardTitle>Non-Consent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-10 text-4xl items-center">
              <p>2</p>
              <FontAwesomeIcon icon={faBan} className="text-slate-800" />
            </div>
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        {services
          .filter((service) => service.active)
          .map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-xl hover:cursor-pointer"
            >
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
                {!service.denied && !service.pending && (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-slate-800 text-green-400"
                  />
                )}
                {service.pending && (
                  <FontAwesomeIcon
                    icon={faCirclePause}
                    className="text-slate-800 text-yellow-400"
                  />
                )}
                {service.denied && (
                  <FontAwesomeIcon
                    icon={faBan}
                    className="text-slate-800 text-red-400"
                  />
                )}
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Home;
