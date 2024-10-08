import DOMPurify from "dompurify";
import { Component, createEffect } from "solid-js";

type Props = {
  svgIcon: string;
};

const SvgIconComponent: Component<Props> = (props) => {
  let element: HTMLDivElement | undefined;

  createEffect(() => {
    if (element) {
      const sanitizedIcon = DOMPurify.sanitize(props.svgIcon, {
        USE_PROFILES: { svg: true },
      });
      element.innerHTML = sanitizedIcon;
    }
  });

  return <div ref={(el) => (element = el)}></div>;
};

export default SvgIconComponent;
