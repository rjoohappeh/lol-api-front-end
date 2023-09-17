type ButtonProps = {
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean;
    text: string;
}

export function Button(props: ButtonProps) {
    const { type, disabled, text } = props;

    return (
        <button type={type} className="p-3 ml-2 bg-blue-700 hover:bg-black disabled:bg-blue-700 text-white rounded-xl " disabled={disabled}>{text}</button>
    )
}