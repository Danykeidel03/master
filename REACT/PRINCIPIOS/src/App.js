function MyButton(props){
    const number = 2
    const color = props.color

    const styles = {
        backgroundColor: color,
        margin: '5px'
    }

    return(
         <button onClick={props.action} style={styles}>soy un boton {props.text}</button>
    )
}


/**
 * Se puede usar el map como para hacer un foreach map((data, index) => {})
 */
export default function MyApp(){
    const view = false;
    const view2 = false;
    const view3= true;
    const action = (num) => console.log(num)
    return(
        <div>
            <h1>Hola</h1>
            <MyButton text='Hola' color='red' action={() => action(1)}/>
            <MyButton />
            <MyButton />
            <>
                {view && <p>Se puede ver</p>}
                {view ? <p>Se puede ver</p> : view2 ? <p>Se puede ver</p> : view3 ? <p>Se puede ver</p> : ''}
            </>
        </div>
    )
}