            import { readFileSync } from 'fs';
            import { inspect } from 'util';
            
            const filePath = './29.txt'; 
            const letters = 'utf8';
            let fileContent;
            
            try {
              fileContent = readFileSync(filePath, letters);
              console.log('Contenido del archivo:', inspect(fileContent,  { showHidden: false, depth: null, colors: true }));
            } catch (err) {
              console.error('Error al leer el archivo:', inspect(err,  { showHidden: false, depth: null, colors: true }))
            }
            
            const lines  = fileContent.split('\n');

            console.log('Contenido del archivo:', lines);

            const linesCount = lines.length;

            console.log('Número de líneas:', linesCount);

            const wordCount = fileContent.split(/\s+/);
            console.log('array :', wordCount);

            const palabrasCount = wordCount.length;

            console.log('Número de palabras:', palabrasCount);
            const adjustedFileContent = fileContent.replace(/\r/g, ''); 
            const numberOfCharacters = adjustedFileContent.length;
            console.log('Número de caracteres:', numberOfCharacters);