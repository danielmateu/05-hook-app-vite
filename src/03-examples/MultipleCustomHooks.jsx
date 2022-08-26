
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, suma, resta } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; //Si la data tiene valor, toma la de la posicion 0!


    return (
        <>
            <h2>BreakingBad Quotes</h2>

            {
                isLoading
                    ?
                    <LoadingQuote />
                    :
                    <Quote author={author} quote={quote}/>
            }

            <button
                onClick={() => suma()}
                disabled={isLoading}
                className="btn btn-success">Next Quote
            </button>

            <button
                onClick={() => resta()}
                disabled={isLoading}
                className="btn btn-light">Go Back mf!
            </button>

            <hr />
        </>
    )
}
