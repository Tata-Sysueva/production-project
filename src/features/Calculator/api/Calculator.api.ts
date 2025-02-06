export const getCalcPayment = async (payment: number, signal?: AbortSignal) => {
    let response = fetch('/credit/calc-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            sum: payment
        }),
        // signal,
      });

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(payment);
        }, 300);
    })
}
  