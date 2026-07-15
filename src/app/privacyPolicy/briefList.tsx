interface Props {
    title: string;
    paragraph?: string | React.ReactNode;
    list?: string[] | React.ReactNode[];
    desc?: string[];
}

export default function BriefList({ title, paragraph, list, desc }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <div className="font-semibold mb-2">
                {title}
            </div>
            <div className="text-gray-600 font-light mb-2">
                {paragraph}
            </div>
            <div>
                <ul className="flex flex-col pb-4 mb-2 px-4 gap-4 list-disc ml-4">
                    {list?.map((details, index) => (
                        <li key={index}>
                            <span>{details}</span>
                        </li>
                    ))}
                </ul>
            </div>

             <div>
                <ul className="flex flex-col pb-6 mb-2 gap-4 ml-4">
                    {desc?.map((description, index) => (
                        <li key={index}>
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}