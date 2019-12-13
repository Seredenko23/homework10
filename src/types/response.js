//@flow
type response<T> = {
    status: number,
    body: Array<T>
}

export type { response }