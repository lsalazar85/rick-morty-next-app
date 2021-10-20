interface Props {
    name: string
}

const Card = (props: Props)=> (
    <div style={{ width: "30%", height: '10rem', border: '1px solid red', margin: '0 2rem 2rem 0'}}>{props.name}</div>
)

export default Card