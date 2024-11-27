import Main from "@/src/components/__old__/polygon/composite_components/main/main";
import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";

const ContactFormBody = () => {
  const { isSm } = useBreakpoints();

  const formContent = (
    <div
      className={`flex w-full flex-col items-center justify-center gap-6 pt-3 sm:flex-row sm:pt-10 ${isSm ? "relative z-[1] -mt-[3px] h-[250px] bg-[#564A8D]" : ""}`}
    >
      {/* Name Field */}
      <Form.Field name="name">
        <Form.Control asChild>
          <Polygon
            overflow={false}
            stroke="white"
            strokeWidth={2}
            fill="none"
            points={generateHexagonPoints({ width: 331, height: 57 })}
            style={{
              width: "331px",
              position: "relative",
            }}
          >
            <Typography
              required
              placeholder="First name"
              component="input"
              className="mt-[2px] flex h-4/5 w-4/5 scale-y-150 justify-center bg-transparent p-1 font-bold text-white placeholder:text-center placeholder:text-white focus:outline-none"
            />
          </Polygon>
        </Form.Control>
      </Form.Field>

      {/* Email Field */}
      <Form.Field name="email">
        <Form.Control asChild>
          <Polygon
            overflow={false}
            stroke="white"
            strokeWidth={2}
            fill="none"
            points={generateHexagonPoints({ width: 331, height: 57 })}
            style={{
              width: "331px",
              position: "relative",
            }}
          >
            <Typography
              required
              placeholder="Email"
              type="email"
              component="input"
              className="mt-[2px] flex h-4/5 w-4/5 scale-y-150 justify-center bg-transparent p-1 font-bold text-white placeholder:text-center placeholder:text-white focus:outline-none"
            />
          </Polygon>
        </Form.Control>
      </Form.Field>
    </div>
  );

  if (isSm) {
    return formContent;
  }

  return (
    <Polygon
      overflow
      fill={"#564A8D"}
      stroke="#9B8DBC"
      strokeWidth={2}
      points={generateHexagonPoints({ width: 921, height: 201 })}
      style={{
        height: "205px",
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-52px",
      }}
    >
      {formContent}
    </Polygon>
  );
};

// ... rest of the file remains unchanged
const ContactFormChild = ({ isPressed }) => {
  const { isSm } = useBreakpoints();
  return (
    <>
      <Form.Field name="message">
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a message
        </Form.Message>
        <Form.Control asChild required>
          <Polygon
            overflow={false}
            strokeWidth={0}
            fill="white"
            style={{
              width: isSm ? "100vw" : "819px",
              position: "relative",
              zIndex: "10",
              top: "36px",
            }}
            points={generateOctagonPoints({
              width: 812,
              height: 288,
              type: "bottom",
            })}
          >
            <Typography
              rows={10}
              required
              placeholder="Your Message"
              component="textarea"
              className="scrollbar-hide mt-[2px] flex h-[70%] w-4/5 justify-center pt-2 font-bold text-black placeholder:text-left placeholder:text-black focus:outline-none xl:pt-10"
            />
          </Polygon>
        </Form.Control>
      </Form.Field>
      <div className="relative">
        <Form.Submit className="w-full">
          <Polygon
            className="pointer-events-auto"
            overflow={false}
            stroke="#FFF200"
            strokeWidth={2}
            fill="#8858B5"
            style={{
              width: "289px",
              zIndex: "10",
            }}
            points={generateHexagonPoints({ width: 289, height: 58 })}
          >
            <Typography
              className="font-bold text-white"
              variant="fluid-2xl"
              component="span"
            >
              Send
            </Typography>
            {isPressed && (
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-white/25"
              />
            )}
          </Polygon>
        </Form.Submit>
      </div>
    </>
  );
};

const ContactTitle = () => (
  <Typography className="font-bold text-white" variant="fluid-2xl">
    contact
  </Typography>
);

const MainContactForm = () => {
  const [serverErrors, setServerErrors] = useState({
    email: false,
    password: false,
  });
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Form.Root
      className="relative flex h-full w-full flex-wrap items-start justify-center"
      onSubmit={(event) => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 200);
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
      }}
      onClearServerErrors={() =>
        setServerErrors({ email: false, password: false })
      }
    >
      <Main title={<ContactTitle />} body={<ContactFormBody />}>
        <ContactFormChild isPressed={isPressed} />
      </Main>
    </Form.Root>
  );
};

export default MainContactForm;
