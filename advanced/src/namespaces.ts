/// <reference path="form-namespace.ts" />

namespace IForm {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const myForm = new MyForm('g@mail.com');
}
    console.log(IForm.myForm);
