import { memo } from "react"


export const ShowIncrement = memo(
    ({ suma }) => {

        console.log('Me volví a generar... 💀')

        return (
            <>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => suma(10)}
                >add 10</button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => suma(5)}
                >add 5</button>
                <button
                    className="btn btn-outline-info"
                    onClick={() => suma(1)}
                >add 1</button>
            </>
        )
    }

)