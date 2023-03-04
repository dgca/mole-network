export function parseEventDefiniton(event: string) {
  const normalized = event
    .trim()
    .replace(/^event\s+/, '')
    .replace(/\n/g, '')
    .replace(/\s\s+/g, '')
    .replace(/,\s/g, '');

  const { start, params, end } = normalized.match(
    /(?<start>^\w+\()(?<params>.+)(?<end>\))/
  ).groups;

  const paramDescriptors = params.split(',').map((item) => {
    return item.split(/\s+/g);
  });

  const topicArgs = paramDescriptors.map((item) => item[0]).join(',');

  const parameters = paramDescriptors.map((item) => {
    const isIndexed = item[1] === 'indexed';

    const obj = {
      type: item[0],
      name: item[isIndexed ? 2 : 1],
    };
    if (isIndexed) {
      obj['indexed'] = true;
    }
    return obj;
  });

  return {
    topic: `${start}${topicArgs}${end}`,
    parameters,
    indexed: paramDescriptors.some((item) => item.length === 3),
  };
}
