import type { Properties } from "csstype";

interface BoxModel {
    width: Properties["width"];
    height: Properties["height"];
}

interface PositionAbsoluteCoords {
    top: Properties["top"];
    right: Properties["right"];
    bottom: Properties["bottom"];
    left: Properties["left"];
}

interface PositionAbsolute extends PositionAbsoluteCoords {
    position: Properties["position"];
}

interface Ellipsis {
    overflow: Properties["overflow"];
    textOverflow: Properties["textOverflow"];
    whiteSpace: Properties["whiteSpace"];
}

interface VerticalEllipsis {
    overflow: Properties["overflow"];
    display: Properties["display"];
    WebkitLineClamp: Properties["WebkitLineClamp"];
    WebkitBoxOrient: Properties["WebkitBoxOrient"];
}

const box = (width: string, height: string): BoxModel => {
    return {
        width,
        height,
    };
};

const positionAbsolute = (config: Partial<PositionAbsoluteCoords>): PositionAbsolute => {
    const { top = "auto", right = "auto", bottom = "auto", left = "auto" } = config;

    return {
        position: "absolute",
        top,
        right,
        bottom,
        left,
    };
};

const ellipsis: Ellipsis = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
};

const verticalEllipsis = (lineCount = 3): VerticalEllipsis => {
    return {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lineCount,
    };
};

export { box, ellipsis, positionAbsolute, verticalEllipsis };
