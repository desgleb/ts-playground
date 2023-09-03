interface Rect {
    readonly id : string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '2345',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black';
// rect2.id = '1321';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Наследование интерфейсов

interface RectWIthArea extends Rect {
    getArea: () => number;
}

const rect5: RectWIthArea = {
    id: '2121',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

// interface & class

interface IClock {
    time: Date;
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

interface Styles {
    [key: string]: string;
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}