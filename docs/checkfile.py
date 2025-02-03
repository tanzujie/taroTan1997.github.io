import os
import hashlib
from tqdm import tqdm

def calculate_md5(file_path):
    """
    计算文件的MD5值
    """
    hash_md5 = hashlib.md5()
    try:
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    except Exception as e:
        print(f"无法读取文件 {file_path}: {e}")
        return None

def is_file_corrupted(file_path):
    """
    判断文件是否损坏（假设已知MD5值为None即表示文件损坏）
    """
    return calculate_md5(file_path) is None

def find_corrupted_files(directory):
    """
    查找指定目录下所有损坏的文件
    """
    corrupted_files = []
    file_count = sum([len(files) for r, d, files in os.walk(directory)])
    with tqdm(total=file_count, desc="处理文件", unit="file") as pbar:
        for root, dirs, files in os.walk(directory):
            for file in files:
                file_path = os.path.join(root, file)
                if is_file_corrupted(file_path):
                    corrupted_files.append(file_path)
                pbar.update(1)
    return corrupted_files

def save_corrupted_files_list(file_list, output_file):
    """
    保存损坏文件列表到指定文件
    """
    with open(output_file, 'w') as f:
        for file in file_list:
            f.write(f"{file}\n")

if __name__ == "__main__":
    # 指定要查找的目录
    directory = "F:\\onedrive\\zxy1998.github.io-main\\docs"
    # 指定保存列表的文件
    output_file = "corrupted_files_list.txt"

    # 查找损坏的文件
    corrupted_files = find_corrupted_files(directory)

    # 保存损坏文件列表
    save_corrupted_files_list(corrupted_files, output_file)

    print(f"损坏文件列表已保存到 {output_file}")
