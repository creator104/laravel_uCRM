import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, submitFunction, form } from './Create.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'BreezeValidationErrors', typeof __VLS_localComponents, "BreezeValidationErrors", "BreezeValidationErrors", "BreezeValidationErrors">;
__VLS_components.BreezeValidationErrors;
// @ts-ignore
[BreezeValidationErrors,];
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
{
let __VLS_0!: 'BreezeValidationErrors' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BreezeValidationErrors : (typeof __VLS_resolvedLocalAndGlobalComponents)['BreezeValidationErrors'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, errors: ((__VLS_ctx.errors)), }));
({} as { BreezeValidationErrors: typeof __VLS_0; }).BreezeValidationErrors;
const __VLS_2 = __VLS_1({ ...{}, errors: ((__VLS_ctx.errors)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, errors: ((__VLS_ctx.errors)), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_7 = __VLS_6({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
let __VLS_10 = { 'submit': __VLS_pickEvent(__VLS_9['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onSubmit) };
__VLS_10 = {
submit: (__VLS_ctx.submitFunction)
};
{
const __VLS_11 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
({} as __VLS_IntrinsicElements).input;
const __VLS_13 = __VLS_12({ ...{}, type: ("text"), name: ("title"), value: ((__VLS_ctx.form.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, type: ("text"), name: ("title"), value: ((__VLS_ctx.form.title)), });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
}
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
({} as __VLS_IntrinsicElements).br;
const __VLS_18 = __VLS_17({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
}
if (__VLS_ctx.errors.title) {
{
const __VLS_21 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
(__VLS_ctx.errors.title);
(__VLS_24.slots!).default;
}
// @ts-ignore
[errors, errors, errors, submitFunction, form, form, errors, errors,];
}
{
const __VLS_26 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
({} as __VLS_IntrinsicElements).input;
const __VLS_28 = __VLS_27({ ...{}, type: ("text"), name: ("content"), value: ((__VLS_ctx.form.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, type: ("text"), name: ("content"), value: ((__VLS_ctx.form.content)), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
}
{
const __VLS_31 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
({} as __VLS_IntrinsicElements).br;
const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
}
if (__VLS_ctx.errors.content) {
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_ctx.errors.content);
(__VLS_39.slots!).default;
}
// @ts-ignore
[form, form, errors, errors,];
}
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(__VLS_44.slots!).default;
}
(__VLS_8.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
