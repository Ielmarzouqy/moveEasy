import { Outlet, useNavigate } from "react-router-dom";
import { logoIconOnly } from "../../../assets/images";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTab = location.pathname.split("/")[2] || "login";
  const [selected, setSelected] = useState(selectedTab);

  useEffect(() => {
    setSelected(selectedTab);
  }, [location.pathname, selectedTab]);

  const navigateTo = (key) => {
    setSelected(key);
    navigate(`/auth/${key}`);
  };

  return (
    <section className="bg-white">
      <div className="container flex  justify-center px-6 mx-auto my-2">
        <div className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img width={80} src={logoIconOnly} alt="logo" />
          </div>

          <div className="flex flex-col w-full">
            <Card className="max-w-full">
              <CardBody className="overflow-hidden">
                <Tabs
                  fullWidth
                  size="md"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={navigateTo}
                >
                  <Tab key="login" title="Login" />
                  <Tab key="register" title="register" />
                </Tabs>
                <Outlet />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
