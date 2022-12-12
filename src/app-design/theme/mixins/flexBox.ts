import type { Properties } from "csstype";

interface FlexColumn {
    display: Properties["display"];
    flexDirection: Properties["flexDirection"];
}

interface FlexCenter {
    display: Properties["display"];
    alignItems: Properties["alignItems"];
    justifyContent: Properties["justifyContent"];
}

interface FlexCenterVert {
    display: Properties["display"];
    alignItems: Properties["alignItems"];
    flexDirection: Properties["flexDirection"];
}

interface FlexCenterHoriz {
    display: Properties["display"];
    justifyContent: Properties["justifyContent"];
    flexDirection: Properties["flexDirection"];
}

type FlexCenterColumn = FlexColumn;

const column: FlexColumn = {
    display: "flex",
    flexDirection: "column",
};

const center: FlexCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const centerColumn: FlexCenterColumn = {
    ...center,
    flexDirection: "column",
};

const centerVertical: FlexCenterVert = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
};

const centerHorizontal: FlexCenterHoriz = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
};

export { column, center, centerColumn, centerHorizontal, centerVertical };
