import React, { Fragment } from "react";

const temp1 = `
export type DiffHighlighter = {
    name: string;
    maxLineToIgnoreSyntax: number;
    setMaxLineToIgnoreSyntax: (v: number) => void;
    ignoreSyntaxHighlightList: (string | RegExp)[];
    setIgnoreSyntaxHighlightList: (v: (string | RegExp)[]) => void;
    getAST: (raw: string, fileName?: string, lang?: string) => DiffAST;
    processAST: (ast: DiffAST) => { syntaxFileObject: Record<number, SyntaxLine>; syntaxFileLineNumber: number };
    hasRegisteredCurrentLang: (lang: string) => boolean;
    getHighlighterEngine: () => typeof lowlight;
  };`;

const temp2 = `export type DiffHighlighter = {
    name: string;
    maxLineToIgnoreSyntax: number;
    setMaxLineToIgnoreSyntax: (v: number) => void;
    ignoreSyntaxHighlightList: (string | RegExp)[];
    setIgnoreSyntaxHighlightList: (v: (string | RegExp)[]) => void;
    getAST: (raw: string, fileName?: string, lang?: string) => DiffAST;
    processAST: (ast: DiffAST) => { syntaxFileObject: Record<number, SyntaxLine>; syntaxFileLineNumber: number };
    hasRegisteredCurrentLang: (lang: string) => boolean;
    getHighlighterEngine: () => DePromise<ReturnType<typeof getHighlighter>> | null;
  };`;

export default function DiffView() {
    return (
        <Fragment>
            <h1>Hello From React Diff Component</h1>
        </Fragment>
    );
}
