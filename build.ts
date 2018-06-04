import { copySync } from 'fs-extra';
import { build } from 'ng-packagr';
import { join } from 'path';
import * as rimraf from 'rimraf';

async function main() {
    // cleanup dist
    rimraf.sync(join(process.cwd(), '/dist'));

    // copy everything else
    copySync('README.md', join(process.cwd(), 'dist/README.md'));
    copySync('LICENSE', join(process.cwd(), 'dist/LICENSE'));

    // copy src

    // build packages
    await build({
        project: join(process.cwd(), 'src/lib/package.json'),
    });
}

main()
    .then(() => console.log('success'))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
