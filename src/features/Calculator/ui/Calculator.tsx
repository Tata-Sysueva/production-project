import { useCallback, useEffect, useState } from "react"
import { useDebounceEffect } from "shared/helpers/hooks/useDebounceEffect";
import { getCalcPayment } from "../api";

export const Calculator = () => {
    const [newPayment, setNewPayment] = useState<number>();
    const [payment, setPayment] = useState<number>();
    const [abortController, setAbortController] = useState(new AbortController());
    const [isLoading, setIsLoading] = useState(false);
    
    const handleLoadCalcPayment = useCallback(() => {
        if (newPayment) {
            if (isLoading) {
                abortController.abort();
                const newAbortController = new AbortController();
                setAbortController(newAbortController);
            }
            setIsLoading(true);
            getCalcPayment(newPayment, abortController.signal).then(setPayment);    
        }
    }, [newPayment]);

    useDebounceEffect(handleLoadCalcPayment, 1300);
    
    return (
      <div>
          <div> Вы ввели: </div>
          <input type="range" defaultValue={0} onChange={(evt) => setNewPayment(Number(evt.currentTarget.value))}/>
          {payment && <div>Платёж: {payment}</div>}
      </div>
    )
}

