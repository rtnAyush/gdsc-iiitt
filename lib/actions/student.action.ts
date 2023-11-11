'use server';

import { prisma } from '../app/db';

export const handleSubmit = async (e: FormData) => {
  const file = e.get('excel-file') as File;

  if (!file) {
    console.log('No file selected.');
    return;
  }

  console.log(file);

  try {
    // const parsedDataResult = await parsedData(file);
    // console.log(parsedDataResult);
    // await prisma.studentData.createMany({ data: parsedDataResult, skipDuplicates: true, })
  } catch (error) {
    console.error('Error parsing data:', error);
  }
};
