import {
  Body as ColorTemplateBody,
  Title as ColorTemplateTitle,
} from "@/src/components/__old__/polygon/composite_components/main/color";
import MainContactForm from "@/src/components/__old__/polygon/composite_components/main/contact_form";
import {
  Body as DoneBody,
  Title as DoneTitle,
} from "@/src/components/__old__/polygon/composite_components/main/done";
import {
  Body as FlowersBody,
  Title as FlowersTitle,
} from "@/src/components/__old__/polygon/composite_components/main/flowers";
import {
  Body as GardenerTemplateBody,
  Child as GardenerTemplateChild,
  Title as GardenerTemplateTitle,
} from "@/src/components/__old__/polygon/composite_components/main/gardener_configures";
import {
  Body as IconsBody,
  Title as IconsTitle,
} from "@/src/components/__old__/polygon/composite_components/main/icons";
import {
  InvitationChildren,
  InvitationTitle,
} from "@/src/components/__old__/polygon/composite_components/main/invitation";
import Main from "@/src/components/__old__/polygon/composite_components/main/main";
import { Title as ThankYouTitle } from "@/src/components/__old__/polygon/composite_components/main/thanks";
import {
  Child as UploadSelfieChild,
  ChildVariantTwo as UploadSelfieChildVariantTwo,
  Title as UploadSelfieTitle,
} from "@/src/components/__old__/polygon/composite_components/main/upload_selfie";
import useBreakpoints from "@/src/hooks/media_query";
import { Element } from "react";
/**
 * The Main component is a visually complex shape that combines
 * various polygons and lines to create a unique design. It can be customized to
 * show different states, such as active or inactive.
 */
const meta = {
  title: "Components/Composite/Main/Main",
  component: Main,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: Element,
      description: "The title of the page",
    },
    body: {
      control: Element,
      description: "The body of the page",
    },
    children: {
      control: Element,
      description: "Custom children",
    },
    bodyPoints: {
      control: "string",
      description: "Custom clippath for the body",
    },
    bodyStyle: {
      control: Object,
      description: "Custom styles for the body",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const UploadSelfie = {
  args: {
    title: <UploadSelfieTitle />,
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: <UploadSelfieChild />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

export const UploadSelfieVariantTwo = {
  args: {
    title: <UploadSelfieTitle />,
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: <UploadSelfieChildVariantTwo />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

export const GardenerConfigures = {
  args: {
    title: <GardenerTemplateTitle />,
    body: <GardenerTemplateBody />,
    children: <GardenerTemplateChild />,
  },
  render: () => {
    const { isSm } = useBreakpoints();
    return (
      <Main
        titleStyle={{}}
        title={<GardenerTemplateTitle />}
        body={<GardenerTemplateBody />}
      >
        <GardenerTemplateChild />
      </Main>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

export const OnlyTitle = {
  args: {
    title: <UploadSelfieTitle />,
    titleStyle: {
      top: "-25%",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

export const ThankYou = {
  args: {
    title: <ThankYouTitle />,
    body: "we will send you a personal link shortly. in the meantime, feel free to look around.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

export const Invitation = {
  args: {
    body: "Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden.",
    title: <InvitationTitle />,
    children: <InvitationChildren />,
  },
};

export const Icons = {
  args: {
    title: <IconsTitle />,
    body: <IconsBody data={[...Array(16).keys()]} />,
    titleStyle: {
      top: "0%",
    },
  },
};

export const ContactForm = {
  render: () => {
    return <MainContactForm />;
  },
};

export const Done = {
  args: {
    title: <DoneTitle />,
    body: <DoneBody />,
    titleStyle: {
      top: "0%",
    },
  },
};

export const ColorTemplate = {
  args: {
    title: <ColorTemplateTitle />,
    body: <ColorTemplateBody data={[...Array(16).keys()]} />,
    titleStyle: {
      top: "1px",
    },
  },
};

export const Flowers = {
  args: {
    title: <FlowersTitle />,
    children: <FlowersBody data={[...Array(16).keys()]} />,
    titleStyle: {
      top: 0,
    },
  },
};
