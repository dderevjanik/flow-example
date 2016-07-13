// variables

let something: any = 3;
something = "dasmdo";

const test: boolean = true;
const name: string = "daniel";
const count: number = 3;

const ids: string[] = ["fir", "sec"];

// functions

const log = (text: string): void => {
    console.log(text);
};

const sqrt = (x: number): number => {
    return x*x;
};

// Optional params ?
const log = (text: string, warning?: boolean) => {
	if (warning) {
    	console.log(`warning: ${text}`);
    } else {
  		console.log(text);
    }
};

// union types
const log = (content: number|string) => {
    console.log(content);
};

// defining structure or interface
type Questionnaire = {
  	name?: string,
  	id: number|string,
  	data: {
    	last_rev: number
    }
}

const createQuestionnaire = (questionnaire: Questionnaire): void => {
    // code
};

// dict types
type questionGroups = {
    [name: string]: Questionnaire
}

// polymorphic function
const log = <T>(content: T): void => {
    console.log(content);
};

// intersection types
type A = {
    id: number
}

type B = {
    name: string
}

type User = A & B;

