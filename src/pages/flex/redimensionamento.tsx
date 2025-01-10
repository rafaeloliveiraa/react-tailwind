import Caixa from "@/components/Caixa";

export default function Redimensionamento() {
    return (
        <div className="flex gap-1.5">
            <Caixa className="w-14">#1</Caixa>
            <Caixa className="w-32">#2</Caixa>
            <Caixa className="w-64">#3</Caixa>
        </div>
    )
}
{/* 
    shiring-0 não diminui o tamanho do elemento
    shiring-1 diminui o tamanho do elemento em 1/12
    shiring-2 diminui o tamanho do elemento em 2/12

    grow-0 não aumenta o tamanho do elemento
    grow-1 aumenta o tamanho do elemento em 1/12
    grow-2 aumenta o tamanho do elemento em 2/12

    flex-initial encolhe o elemento e não deixa ele crescer, considera o tamanho inicial do elemento
    flex-nome não cresce e nem encolhe o elemento
    flex-1 cresce e encolhe o elemento, não considera o tamanho inicial do elemento
    flex-auto cresce e encolhe o elemento, considerando o tamanho inicial do elemento
    
    
    
    */}