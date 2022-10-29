export class Event{
    constructor(
        public seasonTag: string | null,
        public eventName: string | null,
        public date: string | null,
        public location: string | null,
        public shortInfo: string | null,
        public longInfo: string | null,
        ){}
}

export type Events = Event[];