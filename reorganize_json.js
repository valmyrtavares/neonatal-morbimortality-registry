const fs = require('fs');

const inputFile = 'output.json';
const outputFile = 'cleaned_data.json';

// List of strings that are considered "empty" in this context
const emptyValues = [
  'Idade materna -',
  'Número de consultas PN -',
  'Apresentação - Cef (   ) Pelv (   )',
  'IG –                         PN -',
  'Sexo - M (   ) F (   )  Ind (   )',
  'APGAR – 1’-     5’-     10’-',
  'Reanimação – N (   )   S(   )',
  'Tipo –             I// inst -',
  'Qual –',
  'I// início –       Duraç-',
  'Qual –',
  'CRIB –',
  'SNAP –',
  'Risco de',
  'morte',
  'Alta (   )',
  'Transf (   )',
  'Óbito (   )',
  'Idade -',
  '--'
];

function isMeaningful(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'number') return true;
  if (typeof value !== 'string') return false;
  
  const v = value.trim();
  if (v === '' || v === '-' || v === '|') return false;
  // If it's one of the known template strings (exactly or mostly)
  if (emptyValues.some(e => v.includes(e) && v.length < e.length + 5)) return false;
  return true;
}

try {
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const cleanedData = [];
  let currentRecord = null;

  data.forEach((row) => {
    if (row['IDENTIFICAÇÃO'] && typeof row['IDENTIFICAÇÃO'] === 'string' && row['IDENTIFICAÇÃO'].trim() !== '') {
      if (currentRecord) {
        cleanedData.push(currentRecord);
      }
      currentRecord = { ...row };
    } else if (currentRecord) {
      Object.keys(row).forEach((key) => {
        const val = row[key];
        if (isMeaningful(val)) {
          if (currentRecord[key]) {
             const currentValStr = String(currentRecord[key]);
             const newValStr = String(val);
             // Avoid duplicating the same string if it's already there
             if (!currentValStr.includes(newValStr)) {
                currentRecord[key] = currentValStr + ' | ' + newValStr;
             }
          } else {
            currentRecord[key] = val;
          }
        }
      });
    }
  });

  if (currentRecord) {
    cleanedData.push(currentRecord);
  }

  // Final cleanup of the strings
  cleanedData.forEach(record => {
    Object.keys(record).forEach(key => {
        if (typeof record[key] === 'string') {
            record[key] = record[key].replace(/\s+/g, ' ').trim();
        }
    });
  });

  fs.writeFileSync(outputFile, JSON.stringify(cleanedData, null, 2));
  console.log(`Successfully merged ${data.length} rows into ${cleanedData.length} patient records.`);
} catch (error) {
  console.error('Error during reorganization:', error.message);
  process.exit(1);
}
