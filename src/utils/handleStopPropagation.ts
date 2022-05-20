type ReactClick = React.MouseEvent<HTMLDivElement, MouseEvent>;

export const handleStopPropagation = (e: ReactClick) => e.stopPropagation()