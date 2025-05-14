module Jekyll
    module LastModifiedHelper
      def max_last_modified(page_path, include_paths = "")
        # Ensure include_paths is an array
        include_paths = include_paths.split(',').map(&:strip) if include_paths.is_a?(String)
  
        page_time = site_time(page_path)
        include_times = include_paths.map { |path| site_time(path) }
        ([page_time] + include_times).max
      end
  
      def site_time(path)
        full_path = File.join(Jekyll.sanitized_path(@context.registers[:site].source, path))
        File.exist?(full_path) ? File.mtime(full_path) : Time.at(0)
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::LastModifiedHelper)