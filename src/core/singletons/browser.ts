// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Helpers to interact with Browser APIs.
 */
export class CoreBrowser {

    /**
     * Check whether the given cookie is set.
     *
     * @param name Cookie name.
     * @returns Whether the cookie is set.
     */
    static hasCookie(name: string): boolean {
        return new RegExp(`(\\s|;|^)${name}=`).test(document.cookie ?? '');
    }

    /**
     * Read a cookie.
     *
     * @param name Cookie name.
     * @return Cookie value.
     */
    static getCookie(name: string): string | null {
        const cookies = (document.cookie ?? '').split(';').reduce((cookies, cookie) => {
            const [name, value] = cookie.trim().split('=');

            cookies[name] = value;

            return cookies;
        }, {});

        return cookies[name] ?? null;
    }

}
