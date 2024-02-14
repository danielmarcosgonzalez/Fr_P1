import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Busqueda ={
    results:People[]
}

type People ={
    name:string,
    height:string,
    mass:string,
    gender:string,
    birth_year:string

}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown,Busqueda>)=>{
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        const response = await Axios.get<Busqueda>(`https://swapi.dev/api/people/?search=${name}`);
        return ctx.render(response.data);
    }
}

const Page = (props: PageProps<Busqueda>)=>{
    const peop = props.data;
    return(
        <div>
            <ul>
                <li>Name: {peop.results.at(0)?.name}</li>
                <li>Height: {peop.results.at(0)?.height}</li>
                <li>Mass: {peop.results.at(0)?.mass}</li>
                <li>Gender: {peop.results.at(0)?.gender}</li>
                <li>Birth_year: {peop.results.at(0)?.birth_year}</li>
            </ul>
        </div>
    )
}
export default Page;