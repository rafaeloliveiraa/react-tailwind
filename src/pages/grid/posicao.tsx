import Caixa from "@/components/Caixa";

export default function Posicao() {
    return (
        <div className="
          m-5 grid gap-2.5 grid-cols-3 h-72 bg-zinc-700 
        ">
            <Caixa className="row-start-1 row-end-4">#1</Caixa>
            <Caixa className="row-start-1 row-end-3 col-start-2 col-end-4">#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
        </div>
    )
}