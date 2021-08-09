import globby from 'globby';
import fs from 'fs';

type PathParam = string;

type Replacement = {
    find: string | RegExp;
    replaceWith: string;
};

type ReplaceInPathParam = Replacement | Replacement[];

export const replaceInPath = (path: PathParam, replacement: ReplaceInPathParam) => {
    // Make sure that file paths use forward-slashes.
    path = path.replace(/\\/g, "/");

    const paths = globby.sync(path);
    const replacements = Array.isArray(replacement) ? replacement : [replacement];

    for (let i = 0; i < paths.length; i++) {
        const currentPath = paths[i];
        let file = fs.readFileSync(currentPath, "utf8");

        for (let j = 0; j < replacements.length; j++) {
            const currentReplacement = replacements[j];
            const findRegex =
                typeof currentReplacement.find === "string"
                    ? new RegExp(currentReplacement.find, "g")
                    : currentReplacement.find;

            file = file.replace(findRegex, currentReplacement.replaceWith);
        }

        fs.writeFileSync(currentPath, file);
    }
};
