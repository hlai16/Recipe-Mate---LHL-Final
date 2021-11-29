


export default function RecipeDetails(props) {


    return (
        <>

            <div className="recipeUrlDiv--img">
                <img src={props.image} alt="display image" />
            </div>

            <p></p>
            <p>{props.description}</p>
            <table className="table recipe-presentation">
                <tbody>
                    <tr>
                        <th scope="row">Good for</th>
                        <td>{props.category_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Ingredients</th>
                        <td>{props.ingredients}</td>
                    </tr>
                    <tr>
                        <th scope="row">How to prepare</th>
                        <td>{props.steps}</td>
                    </tr>
                    <tr>
                        <th scope="row">Servings</th>
                        <td>{props.servings}</td>
                    </tr>
                    <tr>
                        <th scope="row">Preparation time</th>
                        <td>{props.time}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


