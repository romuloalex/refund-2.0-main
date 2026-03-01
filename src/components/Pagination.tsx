import { Button } from "./Button"; // reusable button component
import leftSvg from "../assets/left.svg"; // ícone de seta esquerda
import rightSvg from "../assets/right.svg"; // ícone de seta direita

type Props = {
  current: number; // current page number
  total: number; // total available pages
  onNext: () => void; // handler for next button
  onPrevious: () => void; // handler for previous button
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 items-center justify-center gap-2.5">
      {/* previous page button, disabled on first page */}
      <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
        <img src={leftSvg} alt="Ícone de voltar página" />
      </Button>
      <span className="text-gray-200 text-sm">
        {current}/{total} {/* display current/total */}
      </span>

      {/* next page button, disabled on last page */}
      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="Ícone de avançar página" />
      </Button>
    </div>
  );
}
