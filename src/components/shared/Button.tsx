type ButtonProps = {
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean;
    text: string;
}

export function Button(props: ButtonProps) {
    const { type, disabled, text } = props;

    return (
        <button type={type} className="transition p-3 ml-2 bg-blue-700 hover:bg-black disabled:bg-slate-200 text-white disabled:text-black rounded-xl " disabled={disabled}>{text}</button>
    );
}