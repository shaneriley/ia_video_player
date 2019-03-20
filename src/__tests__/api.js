import mockAxios from "axios";
import * as API from "../api";
import metadata_fixture from "../__fixtures__/metadata";

describe("API Calls", () => {
  it("returns metadata for an archived item", async () => {
    mockAxios.get.mockImplementationOnce(() => (
      Promise.resolve({
        data: metadata_fixture
      })
    ));

    const id = "InformationM",
          metadata = (await API.fetchMetadata(id)).data;

    expect(metadata.dir).toBeDefined();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`https://archive.org/metadata/${id}`);
  });
});
