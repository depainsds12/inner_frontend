// Typography.stories.jsx
import Typography from "@/src/components/typography/typography";

export default {
  title: "Components/Elementary/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
        "fluid-sm",
        "fluid-base",
        "fluid-lg",
        "fluid-xl",
        "fluid-2xl",
        "fluid-3xl",
        "fluid-4xl",
        "fluid-5xl",
        "fluid-6xl",
        "fluid-7xl",
        "fluid-40",
        "display",
        "heading",
        "subheading",
        "caption",
        "overline",
      ],
    },
    component: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ overflowY: "scroll", marginBottom: "10vh", height: "90vh" }}>
      <Typography variant="fluid-sm">Fluid Small Text (14px - 16px)</Typography>
      <Typography variant="fluid-base">
        Fluid Base Text (16px - 18px)
      </Typography>
      <Typography variant="fluid-lg">Fluid Large Text (18px - 22px)</Typography>
      <Typography variant="fluid-xl">
        Fluid Extra Large Text (20px - 28px)
      </Typography>
      <Typography variant="fluid-2xl">Fluid 2XL Text (24px - 36px)</Typography>
      <Typography variant="fluid-3xl">Fluid 3XL Text (30px - 48px)</Typography>
      <Typography variant="fluid-4xl">Fluid 4XL Text (36px - 60px)</Typography>
      <Typography variant="fluid-40">Fluid 40 Text (40px - 60px)</Typography>
      <Typography variant="fluid-5xl">Fluid 5XL Text (48px - 80px)</Typography>
      <Typography variant="fluid-6xl">Fluid 6XL Text (60px - 100px)</Typography>
      <Typography variant="fluid-7xl">Fluid 7XL Text (72px - 120px)</Typography>

      <Typography variant="xs">Extra Small Text (12px)</Typography>
      <Typography variant="sm">Small Text (14px)</Typography>
      <Typography variant="base">Base Text (16px)</Typography>
      <Typography variant="lg">Large Text (18px)</Typography>
      <Typography variant="xl">Extra Large Text (20px)</Typography>
      <Typography variant="2xl">2XL Text (24px)</Typography>
      <Typography variant="3xl">3XL Text (30px)</Typography>
      <Typography variant="4xl">4XL Text (36px)</Typography>
      <Typography variant="5xl">5XL Text (48px)</Typography>
      <Typography variant="6xl">6XL Text (60px)</Typography>
      <Typography variant="7xl">7XL Text (72px)</Typography>
      <Typography variant="8xl">8XL Text (96px)</Typography>
      <Typography variant="9xl">9XL Text (128px)</Typography>

      <Typography variant="display" component="h1">
        Display Text (48px - 80px)
      </Typography>
      <Typography variant="heading" component="h2">
        Heading Text (32px - 44px)
      </Typography>
      <Typography variant="subheading" component="h3">
        Subheading Text (24px - 32px)
      </Typography>
      <Typography variant="caption">Caption Text (12px)</Typography>
      <Typography variant="overline">Overline Text (10px)</Typography>
    </div>
  ),
};

export const AllComponents = {
  render: () => (
    <div>
      <Typography variant="display" component="h1">
        H1: Display Heading
      </Typography>
      <Typography variant="heading" component="h2">
        H2: Main Heading
      </Typography>
      <Typography variant="subheading" component="h3">
        H3: Subheading
      </Typography>
      <Typography variant="lg" component="h4">
        H4: Section Heading
      </Typography>
      <Typography variant="base" component="h5">
        H5: Subsection Heading
      </Typography>
      <Typography variant="sm" component="h6">
        H6: Minor Heading
      </Typography>
      <Typography variant="base" component="p">
        P: This is a paragraph of text. It demonstrates how the Typography
        component renders a standard paragraph. The text can be long and will
        wrap naturally within its container.
      </Typography>
      <div>
        <Typography variant="base" component="span">
          Span: Inline text{" "}
        </Typography>
        <Typography variant="base" component="span">
          can be combined{" "}
        </Typography>
        <Typography variant="base" component="span">
          using multiple span elements.
        </Typography>
      </div>
    </div>
  ),
};

// Individual variant stories
export const Testing = {
  args: {
    children: "Fluid Small Text (14px - 16px)",
    variant: "fluid-sm",
  },
};
