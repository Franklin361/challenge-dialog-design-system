import './style.css'

interface Props {
    src: string;
    alt: string;
    className: string;
    title: string;
    desc: string
}

export const ContentModal = ({ src, alt, className, desc,title }: Props) => {
    return (
        <>
            <div className={className}>
                <img src={src} alt={alt} />
            </div>
            <span className="title-modal">{title}</span>
            <p className="desc-modal">{desc}</p>
        </>
    )
}