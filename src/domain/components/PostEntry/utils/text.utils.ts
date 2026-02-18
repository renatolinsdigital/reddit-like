import { Colors } from 'src/theme/models';

export function postCategoryToLabel(postType: string) {
  return postType.replace('_', ' ');
}

export function snakeCaseToCamelCase(text: string): keyof Colors | string {
  return text
    .toLowerCase()
    .replace(/[-_][a-z0-9]/g, group => group.slice(-1).toUpperCase());
}

export function removeUrlProtocol(url: string) {
  return url.substring(url.indexOf(':') + 3);
}
