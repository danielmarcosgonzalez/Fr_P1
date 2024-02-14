import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Page={
    pag:string,
    next:string,
    previous:string,
    results:Startship[]
}

type Startship={
    name:string,
    model:string,
    manufacturer:string,
    cost_in_credits:string
};

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown,Page>)=>{
        const pag = ctx.params.pag;
        const response = await Axios.get<Page>(`https://swapi.dev/api/starships/?page=${pag}`);
        return ctx.render(response.data);
    }
}


const P =(props: PageProps<Page>)=>{
    const pg = props.data;
    return(
        <div>
            <ul>
                {pg.results.map((startship)=>(
                    <><li style="color:red">Name: {startship.name}</li><li>Model: {startship.model}</li><li>Manufacturer: {startship.manufacturer}</li><li>Cost in credits: {startship.cost_in_credits}</li></>
                    
                ))}
            </ul>

            <button >
                <a href={`/startships/${parseInt(props.params.pag) + 1 }`}>
                    Next
                </a>
            </button>

            <button >
                <a href={`/startships/${parseInt(props.params.pag) - 1 }`}>
                    Prev
                </a>
            </button>

            <form method="get" action="/startships">
                <input type="text" name="page" />
                <button type="submit">Enviar</button>
            </form>
            
        </div>
    )
}
export default P;